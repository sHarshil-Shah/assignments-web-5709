import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Admin() {

    const navigate = useNavigate();

    function goToSignUp(event: any): void {
        navigate("/signup");
    }

    function goToUsers(event: any): void {
        navigate("/users");
    }

    return (<>
        <div> Team mate's feature Admin Dashboard </div>
        <h2> I'm just assuming  following page </h2>

        <Button colorScheme='blue' onClick={goToSignUp}>Create User</Button>&nbsp;&nbsp;&nbsp;
        <Button colorScheme='blue' onClick={goToUsers}>Manage Users</Button>&nbsp;&nbsp;&nbsp;


    </>
    );
}

export default Admin;
