import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NodeModule } from './node/node.module';

@Module({
  imports: [AuthModule, UserModule, NodeModule],
})
export class AppModule {}
