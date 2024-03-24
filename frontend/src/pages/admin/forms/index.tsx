import { enqueueSnackbar } from 'notistack'
import { DragEvent, useEffect, useState } from 'react'
import { editFormFlow, getForms } from '../../../services/adminService'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../route/routes';
import CircularProgressBar from '../../../components/generic/CircularProgress';


const Forms = () => {
    const [forms, setForms] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [draggingItem, setDraggingItem] = useState(null);

    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            setLoading(true)
            const data = await getForms()
            setForms(data.registrationFlow)
        } catch (error: any) {
            enqueueSnackbar(error.message, { variant: "error" });
        } finally {
            setLoading(false)
        }
    }

    const navigateHandler = (id: string) => {
        navigate(generatePath(ROUTES.editFormVisbility, { formId: id }));
    }

    const handleDragStart = (e: DragEvent, item: any) => {
        setDraggingItem(item);
        e.dataTransfer.setData('text/plain', '');
    };

    const handleDragEnd = () => {
        setDraggingItem(null);
    };

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = async (e: any, targetItem: any) => {
        console.log(e)
        if (!draggingItem) return;

        const currentIndex = forms.indexOf(draggingItem);
        const targetIndex = forms.indexOf(targetItem);

        if (currentIndex !== -1 && targetIndex !== -1) {
            const newItems = [...forms];
            newItems.splice(currentIndex, 1);
            newItems.splice(targetIndex, 0, draggingItem);
            const transformedArray = newItems.map(item => item._id);
            try {
                setLoading(true)
                await editFormFlow({ registrationFlow: transformedArray })
                setForms(newItems);
            } catch (error: any) {
                enqueueSnackbar(error.message, { variant: "error" });
            } finally {
                setLoading(false)
            }
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <div className="sortable-list">
                {loading ? <CircularProgressBar /> :
                    <List dense={true} sx={{ fontSize: "5rem" }}>
                        {forms?.map((item: any, index: any) => (
                            <div
                                key={item._id}
                                className=
                                {`item ${item === draggingItem ?
                                    'dragging' : ''
                                    }`}
                                draggable="true"
                                onDragStart={(e) =>
                                    handleDragStart(e, item)}
                                onDragEnd={handleDragEnd}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, item)}
                            >
                                <div className="details">
                                    <ListItem key={index} sx={{ border: 1, borderRadius: "1rem", marginTop: 1, cursor: "grab" }} className='px-16 py-2' onClick={() => navigateHandler(item._id)}>
                                        <ListItemIcon>
                                            <FolderIcon sx={{ fontSize: "2rem" }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={<span style={{ fontSize: "1.5rem" }}>{item?.formName}</span>}
                                            secondary={`${item?.formFields?.length} Fields`}
                                        />
                                    </ListItem>
                                </div>
                            </div>
                        ))}
                    </List>}
            </div>

        </Box>
    )
}

export default Forms