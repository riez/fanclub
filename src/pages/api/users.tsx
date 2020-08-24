import superagent from "superagent";
import { Request, Response } from "express";
import { API_URI } from "../../config";
import { serialize } from "../../utils";
import { UserModel } from "../../models/user";

export default async (req: Request, res: Response) => {
  try {
    const { query } = req;
    const response = await superagent.get(
      `${API_URI}/?${serialize(query)}`
    );
    const result = response?.body?.results;
    const UserResult: [UserModel] = result.map((item) => ({
      id: item?.login?.uuid,
      gender: item?.gender,
      name: `${item?.name?.title}. ${item?.name?.first}  ${item?.name?.last}`,
      username: item?.login?.username,
      email: item?.email,
      address: `${item?.location?.street?.number} ${item?.location?.street?.street}`,
      city: item?.location?.city,
      state: item?.location?.state,
      country: item?.location?.country,
      postcode: item?.location?.postcode,
      phone: item?.phone,
      cell: item?.cell,
      nat: item?.nat,
      picture: item?.picture?.large,
    }));
    res.json({
      info: {
        page: response?.body?.info?.page,
      },
      items: [...UserResult],
    });
  } catch (error) {
    throw Error(error);
  }
};
