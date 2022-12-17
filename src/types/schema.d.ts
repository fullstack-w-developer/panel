declare global {
    interface CheckBarcodeFormData {
        code: string;
    }

    interface ContactUsFormData {
        name: string;
        email: string;
        title: string;
        message: string;
    }

    interface SendCodeFormData {
        phone: string;
    }

    interface LoginFormData {
        phone: string;
        code: string;
    }

    interface CommentFormData {
        comment: string;
        commentable_type: "App\\Models\\Blog" | "App\\Models\\Product";
        commentable_id: string | number;
    }

    interface RegisterAgencyFormData {
        name: string;
        phone: string;
        email: string;
        address: string;
        cv: string;
    }

    interface UpdateProfileFormData {
        name: string;
        national_code: string;
        last_name: string;
        email: string;
        profile: any;
    }
}

export default global;
