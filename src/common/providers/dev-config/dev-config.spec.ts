import { Test, TestingModule } from '@nestjs/testing';
import { DevConfig } from './dev-config';

describe('DevConfig', () => {
  let provider: DevConfig;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevConfig],
    }).compile();

    provider = module.get<DevConfig>(DevConfig);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
