export interface AddressModel {
    id: number,
    street: string;
    number: string;
    postalCode: string;
    city: string;
    state: string;
    coordX: string;
    coordY: string;
};

export interface PartnerModel {
    id: number;
    name: string;
    birthDate: string;
    address: AddressModel;
    phone: string;
    rg: string;
    cpf: string;
};

export interface AssistanceModel {
    id: number;
    name: string;
    description: string;
    type: number;
    sinisterCircumstances: string;
    status: number;
};

export interface AccidentModel {
    id: number;
    address: AddressModel;
    partnerId: number;
    assistances: AssistanceModel[];
    repliedNotification: boolean;
};