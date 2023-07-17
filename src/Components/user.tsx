
export default class AuthService {
  private userModel = UserModel;
  private tokenModel = TokenModel;
  private saltRounds = 10;

 // user SignUp
  public async userRegister(userInput: {
    email: string;
    password: string;
    mobileNumber: string;
    firstName: string;
    lastName: string;
    confirmPassword: string;
  }) {
    try {
      const { email, password, mobileNumber, firstName, lastName, confirmPassword } = userInput;

      const existingUser = await this.userModel.findOne({ email });

      if (existingUser) {
        throw new HttpException(400, 'Email or MobileNumber already exists!');
      }

      if (password !== confirmPassword) {
        throw new HttpException(400, 'Password and confirm password do not match!');
      }

      const salt = bcrypt.genSaltSync(this.saltRounds);
      const encryptedPassword = bcrypt.hashSync(password, salt);

      const newUser = await (
        await this.userModel.create({
          email,
          password: encryptedPassword,
          mobileNumber,
          firstName,
          lastName,
        })
      ).save();

      const userId = newUser._id;
      const generatedToken = generateAccessToken(newUser);
      const refreshToken = generateRefreshToken(newUser);
      
      const response = {
        userId,
        generatedToken,
        refreshToken,
       
      };

      return response;
    } catch (err) {
      if (err.message.includes('E11000')) {
        throw new HttpException(400, 'Email or MobileNumber already exists!');
      }
      throw new HttpException(err.status || 500, err?.message || 'Something went wrong');
    }
  }


  public async userlogin(userInput: { email: string; password: string;  loginStatus : boolean}) {
    try {
      let user, passwordMatch;

      user = await this.userModel.find({
        email: userInput.email,
      });
      user = user[0];

      if (!user) {
        const salt = bcrypt.genSaltSync(this.saltRounds);
        const encryptPassword = bcrypt.hashSync(userInput.password, salt);
     //   const newUser = await (await this.userModel.create({ email: userInput.email, password: encryptPassword })).save();
        throw new HttpException(400, 'Invalid email');
      }

      passwordMatch = bcrypt.compareSync(userInput.password, user.password);

      if (!passwordMatch) {
        throw new HttpException(400, 'Invalid Login Credentials');
      } else {
        //  create a token collection by refrehce of useID from userSchema
        const userId = user._id;
        const generatedToken = generateAccessToken(user);
        const refreshtoken = generateRefreshToken(user);

        const newToken = await (await this.tokenModel.create({ userId: userId, accessToken: generatedToken, refreshToken: refreshtoken })).save();
        (await this.userModel.findByIdAndUpdate(
          userId,
          { $set: { loginStatus: true } },
          { new: true }
        )).save()

        const response = {
          user,
          generatedToken,
          refreshtoken,
        };
        return response;
      }
    } catch (err) {
      if (err.message.includes('E11000')) {
         throw new HttpException(400, 'Email or MobileNumber already exists!');
      }
      throw new HttpException(err.status || 500, err?.message || 'Something went wrong');
    }
  }

  // When the user Logegd Out

  public async userLogout(userId: string) {
    try {
      const userToken = await this.tokenModel.findOne({ userId });
      if(!userToken) {
        throw new HttpException(400, 'Invalid userId');
      } else {
        await this.userModel.findByIdAndUpdate(
          userId,
          { $set: { loginStatus: false } },
          { new: true }
        );
        await this.tokenModel.deleteMany({ userId });

        const response = {
          message: 'Logged out successfully!'
        };
        return response;
      }
    } catch (err) {
      throw new HttpException(err.status || 500, err?.message || 'Something went wrong');
    }
  }

  // user login throgh mobile number

  public async mobileLogin(userInput: { mobileNumber: string; loginStatus : boolean }) {
    try {
      let user;
      const { mobileNumber } = userInput;
      
      user = await this.userModel.findOne({ mobileNumber: userInput.mobileNumber });
      // Generate OTP (replace this with your own OTP generation logic)
        const otp = Math.floor(1000 + Math.random() * 9000);
       
      if (!user) {
        throw new HttpException(400, 'Invalid Mobile Number');
      }
      await sendSMSWithSNS(mobileNumber, `Your OTP is ${otp}`, 'Otp was successfully send');
      if (!otp) {
        throw new HttpException(400, 'Invalid Login Credentials');
      }
      const userId = user._id;
      
      user =  await (await this.userModel.findOneAndUpdate(
        userId,
        { $set: { otp } },
        { new: true }
      ));
     
     
      return 
    } catch (err) {
      if (err.message.includes('E11000')) {
        throw new HttpException(400, 'Email or MobileNumber already exists!');
      }
      throw new HttpException(err.status || 500, err?.message || 'Something went wrong');
    }
  }

  public async verifyOtp(userInput: { mobileNumber: string; otp: number }) {
    try {
      const { mobileNumber, otp } = userInput;
  
      const user = await this.userModel.findOne({ mobileNumber });
  
      if (!user) {
        throw new HttpException(400, 'Invalid Mobile Number');
      }
  
      if (user.otp !== otp) {
        throw new HttpException(400, 'Invalid OTP');
      }
  
      // Update login status and remove OTP
      user.loginStatus = true;
      user.otp = undefined;
      const userId = user._id;
      const generatedToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      await user.save();
     
      const userToken = await this.tokenModel.create({
        userId: userId,
        accessToken: generatedToken,
        refreshToken: refreshToken,
      });

      const savedToken = await userToken.save();

      const response = {
        userId,
        generatedToken,
        refreshToken,
      };

      return response;
    } catch (err) {
          if (err.message.includes('E11000')) {
            throw new HttpException(400, 'Email or MobileNumber already exists!');
          }
          throw new HttpException(err.status || 500, err?.message || 'Something went wrong');
        }
      }
  
 
}
