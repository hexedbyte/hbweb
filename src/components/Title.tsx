import { Typography } from "@mui/joy"

interface iProps {
    str: string;
}

const Title = (props: iProps) => {
    return (
        <Typography level='h3' sx={{ mb: 1, mt: 4 }}>{props.str}</Typography>
    )
}

export default Title;