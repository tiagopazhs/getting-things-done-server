import TaskModel from './task.model';

async function testModel() {
    try {
        const newTask = await TaskModel.create({
            name: 'nova',
            status: 'ativo',
            actionId: 3
        });

        console.log('Task created with success:', newTask.toJSON());
    } catch (error) {
        console.error('Error to create the task:', error);
    }
}

testModel();
