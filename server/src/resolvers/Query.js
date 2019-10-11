async function portfolios(parent, args, context, info) {
  const data = await context.prisma.portfolios();
  console.log(data);
  return data;
}

module.exports = {
  portfolios
};
