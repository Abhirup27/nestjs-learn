import { Module, forwardRef } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./providers/auth.service";

@Module(
    {
        controllers: [AuthController],
        providers: [AuthService],
        imports: [forwardRef(()=> UserModule)],
        exports:[AuthService]
    }
)
export class AuthModule{}