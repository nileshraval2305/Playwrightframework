
import type {FullConfig} from '@playwright/test';

import * as dotenv from 'dotenv';

export default async function globalSetup(config: FullConfig) {
	console.log("Report path " + config.rootDir);
	if (process.env.test_env) {
		dotenv.config({
			path: `${config.rootDir}/env/.env.${process.env.test_env}`,
			override: true,
		});
	}
}

