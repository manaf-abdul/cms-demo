import { useEffect, useState } from 'react'
import { editFormVisbility, getFormById } from '../../../services/adminService'
import { useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { Box, Typography } from '@mui/material'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import CommentIcon from '@mui/icons-material/Comment';
import CircularProgressBar from '../../../components/generic/CircularProgress'

const EditFormVisibility = () => {
    const { formId } = useParams()
    const [form, setForm] = useState<any>({})
    const [loading, setLoading] = useState(false)
    const [render, setRender] = useState(false)
    const { enqueueSnackbar } = useSnackbar();

    const fetchData = async () => {
        try {
            setLoading(true)
            const data = await getFormById(formId)
            setForm(data)
        } catch (error: any) {
            enqueueSnackbar(error.message, { variant: "error" });
        } finally {
            setLoading(false)
        }
    }

    const handleToggle = (value: string, visibility: boolean) => async () => {
        setLoading(true)
        try {
            const payload = {
                formId,
                fieldId: value,
                visibility: !visibility
            }
            await editFormVisbility(payload)
            setRender(true)
        } catch (error: any) {
            enqueueSnackbar(error.message, { variant: "error" });
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (render) setRender(false)
        fetchData()
    }, [render])

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography
                className="capitalize"
                fontWeight="bold"
                variant="h4"
            >
                {form?.formName}
            </Typography>
            {loading ? <CircularProgressBar /> :
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader>Fields</ListSubheader>}
                >
                    {form?.formFields?.map((field: any) => (
                        <ListItem key={field._id}
                            sx={{
                                borderRadius: "1rem",
                                marginTop: 1,
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
                                '&:hover': {
                                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.5)", // Increase box shadow on hover
                                },
                            }}>
                            <ListItemIcon>
                                <CommentIcon /> {/* Use your icon based on field type */}
                            </ListItemIcon>
                            <ListItemText primary={field.label} />
                            <Switch
                                edge="end"
                                onChange={handleToggle(field._id, field.visibility)}
                                checked={field.visibility}
                            />
                        </ListItem>
                    ))}
                </List>}

        </Box>
    )
}

export default EditFormVisibility