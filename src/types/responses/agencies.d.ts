declare global {
    interface AgenciesListResponse {
        data: AgencyItemResponse[];
        links: LinksResponse;
        meta: MetaResponse;
    }
    interface AgencyItemResponse {
        image: string;
        business_name: string;
        original_name: string;
        address: string;
        phone: string;
        province_id: number;
    }
}
export default global;
