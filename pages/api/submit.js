import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.API_KEY,
  server: process.env.SERVER_PREFIX,
})

export default async function handler(req, res) {
  console.log(req.body)

  const { firstName, lastName, email, sector, province, cluster } = req.body

  console.log({ firstName, lastName, email, sector, province, cluster })

  const subscribingUser = {
    firstName,
    lastName,
    email,
    sector,
    province,
    cluster,
  }

  const tags = [sector, province, cluster]

  console.log(tags)

  try {
    const response = await mailchimp.lists.addListMember(process.env.LIST_ID, {
      email_address: subscribingUser.email,

      location: {
        region: subscribingUser.province,
      },

      status: 'subscribed',
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
      tags: tags,
    })

    res.status(200).json({ response })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error })
  }
}
