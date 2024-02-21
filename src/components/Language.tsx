import { ButtonGroup, IconButton } from "@mui/joy"
import ReactCountryFlag from "react-country-flag"
import { _ } from "../Localization";

interface iApp {
    func: any;
}

interface iProps {
    country: string;
    language: string;
    func: any;
}

const Language = (props: iProps) => {
    return (
        <IconButton onClick={() => { props.func(props.language) }}>
            <ReactCountryFlag
                countryCode={props.country}
                svg
                cdnUrl='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/'
                cdnSuffix='svg'
                title={props.country}
                style={{
                    width: '20px',
                    height: '20px',
                }}
            />
        </IconButton>
    )
}

const LanguageGroup = (props: iApp) => {
    return (
        <ButtonGroup variant='soft' size='sm'>
            <Language country='US' language='en' func={props.func} />
            <Language country='DE' language='de' func={props.func} />
            <Language country='TR' language='tr' func={props.func} />
            <Language country='IT' language='it' func={props.func} />
            <Language country='GR' language='gr' func={props.func} />
        </ButtonGroup>
    )
}

export default LanguageGroup;