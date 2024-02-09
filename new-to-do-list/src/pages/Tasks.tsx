import { CardContent, Card, Stack } from "@mui/material";
import Header from "../components/Header";
import TableListTasks from "../components/Table";
import ModalNewTask from "../components/ModalNewTask";

const Tasks = () => {
    return(
        <Card sx={{ width: '100%', height: '100%', backgroundColor: 'red' }}>
            <CardContent>
            <Stack>
             <Header />
             <ModalNewTask />
             <TableListTasks />
             </Stack>
            </CardContent>
        </Card>
    );
};

export default Tasks;