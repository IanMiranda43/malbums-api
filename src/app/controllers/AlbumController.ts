import { Request, Response } from 'express';

import { ErrorWithStatusCode } from '../errors/ErrorWithStatusCode';
import { Album } from '../entities/Album';

async function getAlbumById(req: Request): Promise<Album> {
  const { user } = req.body;
  const { id } = req.params;

  const album = await Album.findOne({ user_id: user.id, id });

  if (!album) {
    throw new ErrorWithStatusCode(404, 'Album not found');
  }

  return album;
}

export class AlbumController {
  async index(req: Request, res: Response) {
    const { user } = req.body;

    const albums = await Album.find({ user_id: user.id });

    if (!albums) {
      throw new ErrorWithStatusCode(
        404,
        'The current user does not have any album yet',
      );
    }

    res.status(200).json({ status: 'success', albums });
  }

  async create(req: Request, res: Response) {
    const { user, name, artist, year, genre, total_time } = req.body;

    const album = Album.create({
      name,
      artist,
      year,
      genre,
      total_time,
      user_id: user,
    });

    await album.save();

    res.status(201).json({ status: 'success', album });
  }

  async update(req: Request, res: Response) {
    const { name, artist, year, genre, total_time } = req.body;

    const album = await getAlbumById(req);

    album.name = name;
    album.artist = artist;
    album.year = year;
    album.genre = genre;
    album.total_time = total_time;

    await album.save();

    res.status(200).json({ status: 'success', album });
  }

  async delete(req: Request, res: Response) {
    const album = await getAlbumById(req);

    album.remove();

    res.status(200).json({
      status: 'success',
      message: 'Album successfully deleted',
    });
  }

  async findById(req: Request, res: Response) {
    const album = await getAlbumById(req);

    res.status(200).json({ status: 'success', album });
  }

  async find(req: Request, res: Response) {
    const { user } = req.body;
    const { search } = req.params;

    const albums = await Album.find({
      where: [
        { user_id: user.id, name: search },
        { user_id: user.id, artist: search },
        { user_id: user.id, genre: search },
        { user_id: user.id, year: search },
        { user_id: user.id, total_time: search },
      ],
    });

    if (!albums) {
      throw new ErrorWithStatusCode(
        404,
        'The current user does not have any album yet',
      );
    }

    res.status(200).json({ status: 'success', albums });
  }
}
