import { JobModel } from '../models/job.js';
import { DEFAULTS } from '../config.js';

export class JobsController {
    static async getAll(req, res) {
        const { text, title, level, limit = DEFAULTS.LIMIT_PAGINATION, technology, offset = DEFAULTS.LIMIT_OFFSET} = req.query;
        
        const paginatedJobs = await JobModel.getAll({text, title, level, limit, technology, offset});

        return res.json({ data: paginatedJobs });
    }

    static async getId(req, res) {
        const { id } = req.params;

        const job = await JobModel.getId(id);

        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }
        return res.json({ job });
    }

    static async deleteId(req, res) {
        //TODO
    }

    static async create(req, res) {
        const {titulo, empresa, ubicacion, data} = req.body;

        const newJob = await JobModel.create({titulo, empresa, ubicacion, data});

        return res.status(201).json({ job: newJob });
    }

    static async update(req, res) {
        //TODO
    }

}