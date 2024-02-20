import { Box, Table, Typography } from "@mui/joy";
import { _ } from "../Localization";

const Education = () => {
    return (
        <Box>
            <Typography level='title-md' color='primary' fontWeight={'lg'}>EDUCATION</Typography>

            <Table
                aria-label="table with ellipsis texts"
                noWrap
                sx={{ mx: 'auto' }}
            >
                <thead>
                    <tr>
                        <th>Institution</th>
                        <th>Faculty / Branch</th>
                        <th>Location / Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.education.map((v, k) => (
                            <tr>
                                <td>
                                    <Typography noWrap fontWeight="lg">
                                        {v.name}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{v.dep}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{v.notes}</Typography>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Box >
    )
}

export default Education;