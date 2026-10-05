export type Awaitable<T> = T | PromiseLike<T>;

export interface ArrayNotEmpty<T> {
	first: T;
	other: T[];
}

export function pack<T>(first: T, ...other: T[]): ArrayNotEmpty<T> {
	return { first, other };
}

export function unpack<T>(ane: ArrayNotEmpty<T>) {
	return [ane.first, ...ane.other];
}

export namespace Literal {
	export const EXTENSION_ID = 'webdav-sync';

	export namespace WorkspaceState {
		export const IS_SYNC_PAUSED = prefix('isSyncPaused');
		export const SYNC_MODE = prefix('syncMode');
	}

	export namespace Config {
		export namespace Raw {
			export const LOCAL_PATH = 'localPath';
			export const REMOTE_PATH = 'remotePath';
			export const SERVER_HOST = 'serverHost';
			export const USERNAME = 'username';
			export const PASSWORD = 'password';
			export const SHOULD_SYNC_HIDDEN = 'shouldSyncHidden';
			export const CONFLICT_RESOLUTION = 'conflictResolution';
		}

		export const LOCAL_PATH = prefix(Raw.LOCAL_PATH);
		export const REMOTE_PATH = prefix(Raw.REMOTE_PATH);
		export const SERVER_HOST = prefix(Raw.SERVER_HOST);
		export const USERNAME = prefix(Raw.USERNAME);
		export const PASSWORD = prefix(Raw.PASSWORD);
		export const SHOULD_SYNC_HIDDEN = prefix(Raw.SHOULD_SYNC_HIDDEN);
		export const CONFLICT_RESOLUTION = prefix(Raw.SHOULD_SYNC_HIDDEN);

		export type ConflictResolution = 'latest' | 'local' | 'remote';
	}

	export namespace Command {
		export const SYNC_FILE = prefix('syncFile');
		export const SYNC_ALL = prefix('syncAll');
		export const PAUSE_SYNC = prefix('pauseSync');
		export const RESUME_SYNC = prefix('resumeSync');
		export const RECONNECT = prefix('reconnect');
		export const SHIFT_SYNC_MODE = prefix('shiftSyncMode');
	}

	export namespace StatusBarItem {
		export const HINT = prefix('hint');
		export const BUTTON = prefix('button');
	}

	function prefix(s: string) {
		return `${EXTENSION_ID}.${s}`;
	}
}