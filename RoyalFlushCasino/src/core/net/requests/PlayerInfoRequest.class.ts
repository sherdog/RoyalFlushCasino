module dynomike.RoyalFlush {
    export class PlayerInfoRequest extends AppRequest {

        private _player: PlayerModel;

        constructor(player: PlayerModel) {
            super();
            this._player = player;
        }

        getUrl(): string {
            return "player/info/" + this._player.playerID;
        }
    }
}