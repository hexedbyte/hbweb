import { Box, Stack, Table, Typography } from "@mui/joy";
import { _ } from "../Localization";
import Title from "./Title";
import ReactCountryFlag from "react-country-flag";

const WorkExp = () => {

    function handleClick(l: string) {
        window.open(l, "_blank");
    }

    return (
        <Box>
            <Title str={_.workexpTitle} />

            <Table
                aria-label="table with ellipsis texts"
                noWrap
                sx={{ mx: 'auto' }}
            >
                <thead>
                    <tr>
                        <th>{_.job}</th>
                        <th style={{ width: '180px', textAlign: 'right' }}>{_.loctime}</th>
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
                                            <Typography noWrap level="body-sm" color={k == 0 ? 'success' : 'neutral'}>
                                                {v.company}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <Stack direction='row' spacing={1} justifyContent='right'>
                                        <Stack>
                                            <Typography level="body-xs">{v.location}</Typography>

                                            <Stack direction='row' spacing={1} justifyContent='right' alignItems='center'>
                                                <Typography level="body-xs" color={k == 0 ? 'success' : 'neutral'}>{v.start}</Typography>
                                                <Typography level="body-xs">-</Typography>
                                                <Typography level="body-xs" color={k == 0 ? 'success' : 'neutral'}>{v.end.length == 0 ? '........' : v.end}</Typography>
                                            </Stack>
                                        </Stack>

                                        <ReactCountryFlag
                                            countryCode={v.flag}
                                            svg
                                            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                            cdnSuffix="svg"
                                            title={v.flag}
                                            style={{
                                                width: '20px',
                                                height: '20px',
                                                border: '1px #666 solid',
                                                marginTop: '6px',
                                            }}
                                        />
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