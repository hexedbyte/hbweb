import { Box, List, ListItem } from "@mui/joy";
import { _ } from "../Localization";
import Title from "./Title";

const Private = () => {
    return (
        <Box>
            <Title str={_.privateTitle} />

            <List marker='circle'>
                {_.private.map((v) => (
                    <ListItem>{v}</ListItem>
                ))}
            </List>
        </Box>
    )
};

export default Private;