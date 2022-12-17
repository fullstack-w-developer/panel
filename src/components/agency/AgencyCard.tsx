import LocationOnIcon from "@mui/icons-material/LocationOn";
import FadeImage from "@/components/common/FadeImage";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@/components/common/Button";

interface AgencyCardProps {
    agency: AgencyItemResponse;
}

const AgencyCard = ({ agency }: AgencyCardProps) => {
    const { address, business_name, image, phone, original_name } = agency;
    return (
        <div className="w-full overflow-hidden rounded-lg shadow-xl bg-white">
            <FadeImage
                src={image}
                width={350}
                height={300}
                objectFit="cover"
                layout="responsive"
            />

            <div className="relative z-10 p-3 overflow-hidden bg-white rounded-xl flex flex-col -mt-10">
                <h2 className="text-lg font-bold text-gray-700 line-clamp-1">
                    {business_name}
                </h2>
                <div className="flex space-i-1">
                    <PersonIcon
                        color="primary"
                        className="relative -inline-start-1"
                    />
                    {original_name ? (
                        <p className="!mb-0">{original_name}</p>
                    ) : (
                        <span>تعیین نشده</span>
                    )}
                </div>
                <div className="flex space-i-1">
                    <PhoneIcon
                        color="primary"
                        className="relative -inline-start-1"
                    />
                    {phone ? (
                        <p className="!mb-0">{phone}</p>
                    ) : (
                        <span>تعیین نشده</span>
                    )}
                </div>
                <div className="flex space-i-1">
                    <LocationOnIcon
                        color="primary"
                        className="relative -inline-start-1"
                    />
                    {address ? (
                        <p className="!mb-0 line-clamp-2 h-14">{address}</p>
                    ) : (
                        <span>تعیین نشده</span>
                    )}
                </div>
                <Button
                    className="mt-2"
                    href={"tel:" + phone}
                    color="primary"
                    variant="outlined"
                    fullWidth
                >
                    تماس
                </Button>
            </div>
        </div>
    );
};

export default AgencyCard;
