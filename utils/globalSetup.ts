
import type {FullConfig} from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

export default async function globalSetup(config: FullConfig) {
	if (process.env.test_env) {
		const envConfigPath = path.join(process.cwd(), `env/.env.${process.env.test_env}`);

		console.log('Using config path: ' + envConfigPath);
		dotenv.config({
			path: envConfigPath,
			override: true,
		});
	}
}

