import { Box, Divider, Stack, Typography } from "@mui/joy";
import { _ } from "../Localization";
import Title from "./Title";

const Languages = () => {
    return (
        <Box>
            <Title str={_.languagesTitle} />

            <Stack direction='row'>
                {_.languages.map((v, k) => (
                    <Box
                        key={'lang' + k.toString()}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 'fit-content',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 'sm',
                            bgcolor: 'background.surface',
                            color: 'text.secondary',
                            '& svg': {
                                m: 1.5,
                            },
                            '& hr': {
                                mx: 0.5,
                            },
                            marginRight: 1,
                        }}
                    >
                        <Typography sx={{ p: 2 }}>{v.label}</Typography>
                        <Divider orientation="vertical" />
                        {v.rank == "0" && <Typography level='body-sm' color='primary' sx={{ p: 2 }}>{_.languageRanks[0]}</Typography>}
                        {v.rank == "1" && <Typography level='body-sm' color='success' sx={{ p: 2 }}>{_.languageRanks[1]}</Typography>}
                        {v.rank == "2" && <Typography level='body-sm' sx={{ p: 2 }}>{_.languageRanks[2]}</Typography>}
                        {v.rank == "3" && <Typography level='body-sm' sx={{ p: 2 }}>{_.languageRanks[3]}</Typography>}
                    </Box>
                ))}
            </Stack>
        </Box>
    )
};

export default Languages;