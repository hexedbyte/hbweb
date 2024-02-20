import { Box, List, ListItem, Typography } from "@mui/joy";
import { _ } from "../Localization";

const Private = () => {
    return (
        <Box sx={{ py: 2, pr: 2 }}>
            <Typography level='title-md' color='primary' fontWeight={'lg'}>PRIVATE LIFE</Typography>

            <List marker='circle'>
                {_.private.map((v) => (
                    <ListItem>{v}</ListItem>
                ))}
            </List>
        </Box>
    )
};

export default Private;