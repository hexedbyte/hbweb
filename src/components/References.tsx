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
                        <th>{_.job}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.references.map((v, k) => (
                            <tr key={'ref' + k.toString()}>
                                <td>
                                    <Typography noWrap fontWeight="lg">{v.name}</Typography>
                                    <Typography level="body-xs">{v.contact}</Typography>
                                </td>
                                <td>
                                    <Typography noWrap level="body-sm">{v.title}</Typography>
                                    <Typography level="body-xs">{v.company}</Typography>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Box >
    )
}

export default References;