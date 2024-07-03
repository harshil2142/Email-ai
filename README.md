
# Deploying a Next.js Application to AWS EC2:

## 1. SSH Connection to AWS EC2

First, ensure you have the .pem key file for your EC2 instance. Then use this command to connect:

```bash
ssh -i /path/to/your-key.pem ec2-user@your-ec2-public-ip
```

Replace `/path/to/your-key.pem` with the actual path to your .pem file, and `your-ec2-public-ip` with your EC2 instance's public IP address.

## 2. Git Repository Clone

Once connected to your EC2 instance, clone your Git repository:

```bash
git clone https://github.com/harshil2142/Email-ai.git
cd Email-ai
```

## 3. NPM Package Download

Install the necessary npm packages:

```bash
npm install
```

## 4. PM2 Server and Package Download

Install PM2 globally:

```bash
npm install -g pm2
```

## 5. Set .env File

Create and edit your .env file:

```bash
nano .env.local
```

Add your environment variables here. For example:

```
NEXT_PUBLIC_API_HOST=http://your_ip:5002
```
Replace your_ip with running EC2 instance IP.

Save and exit (Ctrl+X, then Y, then Enter).

## 6. Application Build

Build your Next.js application:

```bash
npm run build
```

## 7. PM2 Server Start

Start your application with PM2:

```bash
pm2 start npm --name "your-app-name" -- start
```

Replace "your-app-name" with a name for your application.

To ensure PM2 starts your app on system reboot:

```bash
pm2 startup
pm2 save
```

## 8. Update EC2 Security Groups

This step is done in the AWS Console, not via command line:

1. Go to your EC2 dashboard
2. Click on your instance
3. Go to the "Security" tab
4. Click on the Security Group
5. Edit inbound rules
6. Add a rule for your application port (usually 3000 for Next.js)
7. Save rules

## Additional Helpful Commands

- To view your running applications:
  ```bash
  pm2 list
  ```

- To monitor your application:
  ```bash
  pm2 monit
  ```

- To view logs:
  ```bash
  pm2 logs
  ```

- To stop your application:
  ```bash
  pm2 stop your-app-name
  ```

- To restart your application:
  ```bash
  pm2 restart your-app-name
  ```

Remember to replace placeholders like `your-username`, `your-repo`, `your-app-name`, etc., with your actual values.