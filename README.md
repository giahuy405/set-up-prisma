## Set up
# Cài thư viện

```
yarn add express nodemon dotenv cors
```
Cài prisma 
```
yarn add prisma @prisma/client
```
Khởi tạo prisma
```
yarn prisma init
```

## Env
.env chứa biến môi trường có chuỗi kết nối CSDL

schema.prisma => model : chứa các đối tượng (DAO | Data Access Object) tương ứng với table trong CSDL (database)

Thiết lập file .env
```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
 // điền thông tin vào
DATABASE_URL="mysql://root:1234@localhost:3307/db_food?schema=public" 
```

Thiết lập model trong file `schema.prisma`
```
// Code first 
model User{
  id Int @id @default(autoincrement())
  userName String
  email String
  phone String
}
```

code first =>   thêm model thành table  
```
yarn prisma db push 
```

database first => lấy table tạo thành model
```
yarn prisma db pull 
```

```
yarn prisma generate 
```

Nhớ sửa chỗ provider
```
datasource db {
  provider = "postgresql"  //  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

 