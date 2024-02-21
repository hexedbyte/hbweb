import { Box, List, ListItem } from "@mui/joy";
import { _ } from "../Localization";
import Title from "./Title";

const Portfolio = () => {
    return (
        <Box>
            <Title str={_.portfolioTitle} />

            <List marker='disc'>
                {_.portfolio.map((v, k) => (
                    <ListItem key={'po' + k.toString()}>{v}</ListItem>
                ))}
            </List>
        </Box>
    )
};

export default Portfolio;