import { Box, Table, Typography } from "@mui/joy";
import { _ } from "../Localization";
import Title from "./Title";

const Education = () => {
    return (
        <Box>
            <Title str={_.educationTitle} />

            <Table
                aria-label="table with ellipsis texts"
                noWrap
                sx={{ mx: 'auto' }}
            >
                <thead>
                    <tr>
                        <th>{_.institution}</th>
                        <th>{_.faculty}</th>
                        <th>{_.loctime}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.education.map((v, k) => (
                            <tr key={'edutr' + k.toString()}>
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