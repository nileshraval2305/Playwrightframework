
import type {FullConfig} from '@playwright/test';

import * as dotenv from 'dotenv';

export default async function globalSetup(config: FullConfig) {
	console.log("Root Directory: " + config.rootDir);
	if (process.env.test_env) {
		let envConfigPath = `${config.rootDir}/env/.env.${process.env.test_env}`;
		console.log("Using config path: " + envConfigPath);
		dotenv.config({
			path: envConfigPath,
			override: true,
		});
	}else{
		console.log("No test_env specified");		
	}
}

