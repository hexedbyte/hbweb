import { Box, Stack, Typography } from "@mui/joy";
import { _ } from "../Localization";

const Languages = () => {
    return (
        <Box sx={{ py: 2, pr: 2 }}>
            <Typography level='title-md' color='primary' fontWeight={'lg'}>LANGUAGES</Typography>

            <Stack direction='row'>
                English, Turkish, German
            </Stack>
        </Box>
    )
};

export default Languages;