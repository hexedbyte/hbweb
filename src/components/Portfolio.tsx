import { Box, List, ListItem, Typography } from "@mui/joy";
import { _ } from "../Localization";

const Portfolio = () => {
    return (
        <Box sx={{ py: 2, pr: 2 }}>
            <Typography level='title-md' color='primary' fontWeight={'lg'}>PORTFOLIO</Typography>

            <List marker='circle'>
                {_.portfolio.map((v) => (
                    <ListItem>{v}</ListItem>
                ))}
            </List>
        </Box>
    )
};

export default Portfolio;