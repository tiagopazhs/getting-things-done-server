import ActionModel from './action.model';

async function testModel() {
    try {
        const newAction = await ActionModel.create({
            name: 'Nome da Ação',
            description: 'Descrição da Ação',
            initialDate: new Date(),
            status: 'ativo'
        });

        console.log('Action created with success:', newAction.toJSON());
    } catch (error) {
        console.error('Error to create the action:', error);
    }
}

testModel();
