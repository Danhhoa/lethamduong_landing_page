type CollectionType = "course_type" | "school_year";

export interface ICourses {
    id: number;
    status: string;
    sort: number;
    year: {
        key: number;
        collection: CollectionType;
    };
    type: {
        key: number;
        collection: CollectionType;
    };
    name: string;
    thumbnail: string;
    hanoi_t_s: Date;
    hanoi_t_e: Date;
    hcm_t_s: Date;
    hcm_t_e: Date;
    ordinal_by_type: number;
    ordinal: number;
    zoom: number;
}

export interface ICourseType {
    id: number;
    status: string;
    sort: number;
    name: string;
}
