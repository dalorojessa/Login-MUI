import {Paper} from "@mui/material";
import UsersTabs from "../Components/UserTabs";
import { useParams } from "react-router-dom";

export default function Users() {

const { id } = useParams();

  return (
    <Paper>
        <UsersTabs view={() => parseInt(id)}/>
    </Paper>
  )
}
