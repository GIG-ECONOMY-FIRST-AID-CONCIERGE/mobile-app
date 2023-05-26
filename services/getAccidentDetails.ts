// INTERFACES
import { ICoord } from '../interfaces/location.interface';

// MODELS
import { AccidentModel } from '../libs/axios/model';

export const getAccidentDetails = (helpType: string, replied: boolean, address: any) => {
    const { street, number, postalCode, city, state } = address;
    
    let details: AccidentModel = {
        address: {
            street,
            number,
            postalCode,
            city,
            state,
            coordX: address.latitude.toString() ?? '',
            coordY: address.longitude.toString() ?? ''
        },
        partnerId: 1,
        assistances: [],
        repliedNotification: replied
    }

    if (helpType == 'medicalAssistance') {
        details.assistances = [
            {
                id: 0,
                name: "Samu",
                partnerId: 1,
                description: "Solicitado assitência médica",
                type: 1,
                sinisterCircumstances: "Acidente envolvendo carro",
                status: 1
            }
        ]
    } else if (helpType == 'towAssistance') {
        details.assistances = [
            {
                id: 0,
                partnerId: 1,
                name: "Guincho",
                description: "Solicitado guincho",
                type: 2,
                sinisterCircumstances: "Acidente envolvendo carro, moto precisa ser levada até a residência do acidentado",
                status: 2
            }
        ]
    } else {
        details.assistances = [
            {
                id: 0,
                name: "Samu",
                partnerId: 1,
                description: "Solicitado assitência médica",
                type: 1,
                sinisterCircumstances: "Acidente envolvendo carro",
                status: 1
            },
            {
                id: 1,
                name: "Guincho",
                partnerId: 1,
                description: "Solicitado guincho",
                type: 2,
                sinisterCircumstances: "Acidente envolvendo carro, moto precisa ser levada até a residência do acidentado",
                status: 2,
            }
        ]
    }

    return details;
};
