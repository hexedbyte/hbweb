import { Box, Table, Typography } from "@mui/joy";
import { _ } from "../Localization";

const References = () => {
    return (
        <Box>
            <Typography level='title-md' color='primary' fontWeight={'lg'}>REFERENCES</Typography>

            <Table
                aria-label="table with ellipsis texts"
                noWrap
                sx={{ mx: 'auto' }}
            >
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.references.map((v, k) => (
                            <tr>
                                <td>
                                    <Typography noWrap fontWeight="lg">
                                        {v.name}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{v.title}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{v.company}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{v.contact}</Typography>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Box >
    )
}

export default References;