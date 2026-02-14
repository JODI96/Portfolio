create table Users(
    Id int primary key (1,1),
    FirstName varchar(100) not null,
    LastName varchar(100) not null,
    CreatedAt Date not null default getdate(),
    IsActive bit not null default 0
);