import { MuscleGroup } from "../entitys/MuscleGroup.entity";
import InMemoryModel from "./model.inMemory";
import { Entity } from '../decorators/models.decorator'
import { Relations } from "../decorators/relations.decorator";
import MusclePortionModel from "./musclePortion.model";

@Entity("MuscleGroup")
export default 
    class MuscleGroupModel 
    extends InMemoryModel<MuscleGroupModel> 
    implements MuscleGroup 
{
    @Relations.HasMany<MusclePortionModel>({ 
        referencedColumn: "muscle_group_id", 
        targetEntity: () => MusclePortionModel  
    })
    public musclePortion?: MusclePortionModel;

    constructor(
        public id: number,
        public name: string,
        public image: string | null
    ){
        super()
    }
}