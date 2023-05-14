import InMemoryModel from "./model.inMemory";
import { Entity } from '../decorators/models.decorator'
import { MusclePortion } from "../entitys/MusclePortion.entity";

@Entity("MusclePortion")
export default 
    class MusclePortionModel 
    extends InMemoryModel<MusclePortionModel> 
    implements MusclePortion 
{
    public musclePortion: any;
    
    constructor(
        public id: number,
        public name: string,
        public image: string | null,
        public muscle_group_id: number    
    ){
        super()
    }
    
    
}