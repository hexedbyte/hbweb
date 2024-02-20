import { Card, CardContent, CardCover, Stack, Typography } from "@mui/joy"

interface iProps {
    image: string;
    title: string;
    subtitle: string;
    incardTxtBig?: string;
    incardTxtSmall?: string;
    details?: string;
}

export const Badger = (props: iProps) => {
    return (
        <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={2}
        >
            <img src={'/' + props.image + '.png'} />
            <Stack alignItems='flex-start'>
                <Typography level='title-sm'>{props.subtitle}</Typography>
                <Typography level='title-lg'>{props.title}</Typography>
                {props.details && props.details.length > 0 && <Typography level="body-xs">{props.details}</Typography>}
            </Stack>
        </Stack>
    );
}

export const CardBadger = (props: iProps) => {
    return (
        <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={2}
        >
            <Card component='li' sx={{ width: 64, height: 70, m: 0, p: 0 }} variant='plain'>
                <CardCover>
                    <img
                        src={'/' + props.image + '.png'}
                        loading='lazy'
                        alt=''
                    />
                </CardCover>
                <CardContent sx={{ justifyContent: 'center', textAlign: 'center' }}>
                    <Typography
                        level='h4'
                        fontWeight='lg'
                        color='success'
                    >
                        {props.incardTxtBig}<Typography level='body-xs' fontWeight='lg'>{props.incardTxtSmall}</Typography>
                    </Typography>
                </CardContent>
            </Card>
            <Stack alignItems='flex-start'>
                <Typography level='title-sm'>{props.subtitle}</Typography>
                <Typography level='title-lg'>{props.title}</Typography>
                <Typography level='body-xs'>{props.details}</Typography>
            </Stack>
        </Stack>
    );
}