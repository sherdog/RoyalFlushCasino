module dynomike.RoyalFlush {
    export class PlayerModel extends Model{

        public playerID: string;

        constructor() {
            super();
            console.log('PlayerModel class instantiated');
        }
    }
}