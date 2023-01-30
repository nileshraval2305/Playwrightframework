
import type {FullConfig} from '@playwright/test';

import * as dotenv from 'dotenv';

export default async function globalSetup(config: FullConfig) {
	if (process.env.test_env) {
		dotenv.config({
			path: `env/.env.${process.env.test_env}`,
			override: true,
		});
	}
}

