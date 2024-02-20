import { Box, LinearProgress, Stack, Table, Typography } from "@mui/joy";
import { _ } from "../Localization";

const WorkExp = () => {

    function handleClick(l: string) {
        window.open(l, "_blank");
    }

    return (
        <Box>
            <Typography level='title-md' color='primary' fontWeight={'lg'}>WORK EXPERIENCE</Typography>

            <Table
                aria-label="table with ellipsis texts"
                noWrap
                sx={{ mx: 'auto' }}
            >
                <thead>
                    <tr>
                        <th>Title / Company</th>
                        <th style={{ width: '180px' }}>Location</th>
                        <th style={{ width: '96px' }}>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.workexp.map((v, k) => (
                            <tr>
                                <td>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <Box sx={{ minWidth: 0 }}>
                                            <Typography noWrap fontWeight="lg">
                                                {v.job}
                                            </Typography>
                                            <Typography noWrap level="body-sm">
                                                {v.company}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </td>
                                <td>
                                    <Typography level="body-xs">{v.location}</Typography>
                                </td>
                                <td>
                                    <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                                        <Typography level="body-xs">{v.start}</Typography>
                                        <Typography level="body-xs">-</Typography>
                                        {v.end.length == 0 ? <LinearProgress sx={{ width: '16px', height: '8px' }} /> : <Typography level="body-xs">{v.end}</Typography>}
                                    </Stack>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Box >
    )
}

export default WorkExp;