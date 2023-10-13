import { ButtonProps } from "react-bootstrap"
import { SiteButton } from "./common"
import { FC } from "react"
import { getAnalytics, logEvent } from "firebase/analytics";
import { useTranslation } from "react-i18next";
import { app } from "../../firebase";

const analytics = getAnalytics(app);

interface IFireButtonProps extends ButtonProps {
    translationKey: string;
}

export const FireButton: FC<IFireButtonProps> = ({ translationKey, ...props }) => {
    const { t } = useTranslation();
    const text = t(translationKey);

    const onClick = () => {
        logEvent(analytics, 'button_clicked', {
            key: translationKey,
            text: text
        });
    }

    return (
        <SiteButton
            onClick={onClick}
            {...props}
        >
            {text}
        </SiteButton>
    )
}