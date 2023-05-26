// MODELS
import { AccidentModel } from '../libs/axios/model';

export const getAccidentDetails = (helpType: string, replied: boolean) => {
    let details: AccidentModel = {
        id: 0,
        address: {
            id: 0,
            street: "Av. Engenheiro Luís Carlos Berrini",
            number: "1253 ",
            postalCode: "04571-010",
            city: "São Paulo",
            state: "SP",
            coordX: "-22,985224",
            coordY: "47,115949" 
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
                name: "Guincho",
                description: "Solicitado guincho",
                type: 1,
                sinisterCircumstances: "Acidente envolvendo carro, moto precisa ser levada até a residência do acidentado",
                status: 2
            }
        ]
    } else {
        details.assistances = [
            {
                id: 0,
                name: "Samu",
                description: "Solicitado assitência médica",
                type: 1,
                sinisterCircumstances: "Acidente envolvendo carro",
                status: 1
            },
            {
                id: 1,
                name: "Guincho",
                description: "Solicitado guincho",
                type: 1,
                sinisterCircumstances: "Acidente envolvendo carro, moto precisa ser levada até a residência do acidentado",
                status: 2
            }
        ]
    }

    return details;
};
