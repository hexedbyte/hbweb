import { Box, Table, Typography } from "@mui/joy";
import { _ } from "../Localization";
import Title from "./Title";

const References = () => {
    return (
        <Box>
            <Title str={_.referencesTitle} />

            <Table
                aria-label="table with ellipsis texts"
                noWrap
                sx={{ mx: 'auto' }}
            >
                <thead>
                    <tr>
                        <th>{_.reference}</th>
                        <th>{_.title}</th>
                        <th>{_.company}</th>
                        <th>{_.contact}</th>
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