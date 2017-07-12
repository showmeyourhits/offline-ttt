// @flow
import Anims from 'styles/animations';

export const AppSteps = {
	start: 'enter_name',
	opponentPick: 'pick_your_opponent',
	game: 'play_teh_game_step',
	endGame: 'rematch_or_pick_opponent',
};

const slide = 'animation-slide'

export const transitionAppSlide = {
	enter: Anims[`${slide}-enter`],
	enterActive: Anims[`${slide}-enter-active`],
	leave: Anims[`${slide}-leave`],
	leaveActive: Anims[`${slide}-leave-active`],
}

export const OpponentTypes = {
	bot: 'play_vs_computer',
	player: 'play_vs_other_player',
};
